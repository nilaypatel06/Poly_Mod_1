// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CuteKitten is ERC721, Ownable {
    using Counters for Counters.Counter;
    string private _modelDescription = "Cute Kitten";

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("CuteKitten", "CK") {}

    function getModelDescription() external view returns (string memory) {
        return _modelDescription;
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://teal-charming-minnow-213.mypinata.cloud/ipfs/QmcCXbwVjdPNEa4aPKTmKTunwXos9chJxxtn2VXJtvJLgh";
    }

    function safeMint() external onlyOwner {
        for (uint8 i = 0; i < 5; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment();
            _safeMint(msg.sender, tokenId);
        }
    }
}
