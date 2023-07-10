// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContentContract {
    struct Content {
        string title;
        string description;
        uint256 price;
        address payable creator;
        bool isPurchased;
        bool isLicensed;
    }

    uint256 public contentCount;
    mapping(uint256 => Content) public contents;
    mapping(uint256 => mapping(address => bool)) public contentPurchases;
    mapping(uint256 => mapping(address => bool)) public allowedLicensees;

    event ContentCreated(uint256 indexed id, string title, address creator);
    event ContentPurchased(uint256 indexed id, string title, address buyer);
   



    function createContent(string memory _title, string memory _description, uint256 _price) public {
        contents[contentCount] = Content(_title, _description, _price, payable(msg.sender), false, false);
        emit ContentCreated(contentCount, _title, msg.sender);
        contentCount++;
    }

    function purchaseContent(uint256 _contentId) public payable {
        require(_contentId < contentCount, "Invalid content ID");
        Content storage content = contents[_contentId];
        require(!content.isPurchased, "Content has already been purchased");
        require(msg.value >= content.price, "Insufficient funds");

        content.isPurchased = true;
        contentPurchases[_contentId][msg.sender] = true;

        emit ContentPurchased(_contentId, content.title, msg.sender);
    }

    function grantLicense(uint256 _contentId, address _licensee) public {
        Content storage content = contents[_contentId];
        require(content.creator == msg.sender, "You are not the creator of this content");

        allowedLicensees[_contentId][_licensee] = true;
        content.isLicensed = true;
    }

    function revokeLicense(uint256 _contentId, address _licensee) public {
        Content storage content = contents[_contentId];
        require(content.creator == msg.sender, "You are not the creator of this content");

        allowedLicensees[_contentId][_licensee] = false;
    }

    function getContent(uint256 _contentId) public view returns (string memory title, string memory description, uint256 price, address creator, bool isLicensed) {
        Content storage content = contents[_contentId];
        return (content.title, content.description, content.price, content.creator, content.isLicensed);
    }
}
