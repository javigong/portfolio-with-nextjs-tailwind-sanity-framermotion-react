// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import object and document schemas
import experience from "./experience";
import pageInfo from "./pageInfo";
import project from "./project";
import skill from "./skill";
import social from "./social";

// Give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  // Concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([experience, pageInfo, project, skill, social]),
});
