// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityVerification {

    struct Identity {
        string name;
        string email;
        string idHash;
        bool verified;
    }

    mapping(address => Identity) public identities;

    event IdentityRegistered(address user, string name);
    event IdentityVerified(address user);

    function registerIdentity(
        string memory _name,
        string memory _email,
        string memory _idHash
    ) public {

        identities[msg.sender] = Identity(
            _name,
            _email,
            _idHash,
            false
        );

        emit IdentityRegistered(msg.sender, _name);
    }

    function verifyIdentity(address _user) public {

        identities[_user].verified = true;

        emit IdentityVerified(_user);
    }

    function getIdentity(address _user) public view returns(
        string memory,
        string memory,
        string memory,
        bool
    ){
        Identity memory user = identities[_user];
        return (
            user.name,
            user.email,
            user.idHash,
            user.verified
        );
    }
}