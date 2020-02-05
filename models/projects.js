const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const projectSchema = new Schema({
  project_num:  String,
  name: String,
  description:   String,
  img_s: String,
  img_l: String,
  owner:   String,
  organization:   String,
  location:   Number,
  members: [{user_id: String}],
  skills:[{skill_id: String}]   
        
      },
      {
        timestamps: true,
        versionkey: false

      })

    module.exports = model("Project", projectSchema)


/*
    Query {
      _mongooseOptions: {},
      _transforms: [],
      _hooks: Kareem { _pres: Map {}, _posts: Map {} },
      _executionCount: 0,
      
      model: Model { User },
      schema: Schema {
        obj: {
          name: [Function: String],
          email: [Function: String],
          facebookID: [Function: String],
          profile_pic: [Object],
          phone: [Function: String],
          organization: [Function: String],
          rating: [Function: Number],
          city: [Function: String],
          state: [Function: String],
          country: [Function: String],
          projects_owner: [Array],
          projects_member: [Array],
          skills: [Array]
        },
        paths: {
          name: [SchemaString],
          email: [SchemaString],
          facebookID: [SchemaString],
          'profile_pic.large': [SchemaString],
          'profile_pic.small': [SchemaString],
          phone: [SchemaString],
          organization: [SchemaString],
          rating: [SchemaNumber],
          city: [SchemaString],
          state: [SchemaString],
          country: [SchemaString],
          projects_owner: [DocumentArrayPath],
          projects_member: [DocumentArrayPath],
          skills: [DocumentArrayPath],
          _id: [ObjectId],
          hash: [SchemaString],
          salt: [SchemaString],
          __v: [SchemaNumber]
        },
        aliases: {},
        subpaths: {
          'projects_owner.project_id': [SchemaString],
          'projects_owner.active': [SchemaBoolean],
          'projects_owner._id': [ObjectId],
          'projects_member.project_id': [SchemaString],
          'projects_member.active': [SchemaBoolean],
          'projects_member._id': [ObjectId],
          'skills.skill_id': [SchemaString],
          'skills.level': [SchemaNumber],
          'skills._id': [ObjectId]
        },
        virtuals: { id: [VirtualType] },
        singleNestedPaths: {},
        nested: { profile_pic: true },
        inherits: {},
        callQueue: [],
        _indexes: [],
        methods: {
          setPassword: [Function],
          changePassword: [Function],
          authenticate: [Function]
        },
        methodOptions: {},
        statics: {
          authenticate: [Function],
          serializeUser: [Function],
          deserializeUser: [Function],
          register: [Function],
          findByUsername: [Function],
          createStrategy: [Function]
        },
        tree: {
          name: [Function: String],
          email: [Function: String],
          facebookID: [Function: String],
          profile_pic: [Object],
          phone: [Function: String],
          organization: [Function: String],
          rating: [Function: Number],
          city: [Function: String],
          state: [Function: String],
          country: [Function: String],
          projects_owner: [Array],
          projects_member: [Array],
          skills: [Array],
          _id: [Object],
          hash: [Object],
          salt: [Object],
          __v: [Function: Number],
          id: [VirtualType]
        },
        query: {},
        childSchemas: [ [Object], [Object], [Object] ],
        plugins: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
        '$id': 1,
        s: { hooks: [Kareem] },
        _userProvidedOptions: {},
        options: {
          typePojoToMixed: true,
          typeKey: 'type',
          id: true,
          noVirtualId: false,
          _id: true,
          noId: false,
          validateBeforeSave: true,
          read: null,
          shardKey: null,
          autoIndex: null,
          minimize: true,
          discriminatorKey: '__t',
          versionKey: '__v',
          capped: false,
          bufferCommands: true,
          strict: true,
          pluralization: true
        },
        '$globalPluginsApplied': true
      },
      op: 'findOne',
      options: {},
      _conditions: { _id: '5e3abee1dec18b01baaf3e25' },
      _fields: undefined,
      _update: undefined,
      _path: undefined,
      _distinct: undefined,
      _collection: NodeCollection {
        collection: NativeCollection {
          collection: [Collection],
          Promise: [Function: Promise],
          opts: [Object],
          name: 'users',
          collectionName: 'users',
          conn: [NativeConnection],
          queue: [],
          buffer: false,
          emitter: [EventEmitter]
        },
        collectionName: 'users'
      },
      _traceFunction: undefined,
      '$useProjection': true
    }
    */