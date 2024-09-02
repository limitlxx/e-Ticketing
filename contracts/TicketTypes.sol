// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

// Uncomment this line to use console.log
// import "hardhat/console.sol";


enum Types {
    Limited,
    Open
  }

  enum RegisterType {
    Volunteer,
    Attendee
  }

  struct CreateEvent {
    string name;
    string description;
    Types eventType;
    string date;
    string venue;
    string imageUrl;
  }

  struct RegisterEvent {
    string name;
    string email;
    RegisterType eventTypes;
    string imageUrl;
  }
