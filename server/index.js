const express = require('express');
const {createServer} = require('http');//this is subscription server live
const {makeExecutableSchema} = require('@graphql-tools/schema') //this is makeExecutableSchema from typeDefs and resolvers
const {SubscriptionServer} = require('subscriptions-transport-ws') 
const {execute,subscribe} = require('graphql') 
const {ApolloServer} = require('apollo-server-express') //this is apollo server
const mongoose = require('mongoose') //this is mongoose
