// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "./TicketTypes.sol";

contract Ticket {
  
  CreateEvent[] public createEvents;
  RegisterEvent[] private registerEvents;

  error NoNameProvided(string name);
  error NoDescriptionProvided(string name);
  error NoDateProvided(string name);
  error NoVenueProvided(string name);

  event CreatedEvent(string indexed name, string message);

  function createEvent(
    string memory _name,
    string memory _description,
    Types _eventType,
    string memory _date,
    string memory _venue
  ) public {
    if (bytes(_name).length == 0) revert NoNameProvided(_name);
    if (bytes(_description).length == 0) revert NoDescriptionProvided(_description);
    if (bytes(_date).length == 0) revert NoDateProvided(_date);
    if (bytes(_venue).length == 0) revert NoVenueProvided(_venue);

    CreateEvent memory createdEvent = CreateEvent({
      name: _name,
      description: _description,
      eventType: _eventType,
      date: _date,
      venue: _venue,
      imageUrl: ""
    });

    createEvents.push(createdEvent);

    emit CreatedEvent(_name, "Event created sucessfully");
  }

  function registerEvent(
    string memory _name,
    string memory _email,
    RegisterType _eventTypes
  ) public {
    if (bytes(_name).length == 0) revert NoNameProvided(_name);
    if (bytes(_email).length == 0) revert NoDateProvided(_email);

    RegisterEvent memory registeredEvent = RegisterEvent({
      name: _name,
      email: _email,
      eventTypes: _eventTypes,
      imageUrl: ""
    });

    registerEvents.push(registeredEvent);

    emit CreatedEvent(_name, "Event created sucessfully");
  }
}
