"use strict";


const factories = require("node-opcua-factory");

// OPC Unified Architecture, Part 4  $7.29 page 139
const SessionAuthenticationToken_Schema = {
    name: "SessionAuthenticationToken",
    subtype: "NodeId"
};
factories.registerBasicType(SessionAuthenticationToken_Schema);

