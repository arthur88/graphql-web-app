const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        persons: [Person!],
        person[val1: Int!]: Person!
    }
    type Person {
        val1: String,
        val2: String
    }
    type Facility {
        val3: String
        val4: String
    }
    type Exposure {
        val5: String
    }
`);

module.exports = schema;