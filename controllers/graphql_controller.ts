import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from "graphql";

const DressingType = new GraphQLObjectType({
    name: "Dressing",
    fields: () => ({
        id: { type: GraphQLInt },
        name:  { type: GraphQLString }
    })
  });

const SalatType = new GraphQLObjectType({
    name: "Salat",
    fields: () => ({
        id: { type: GraphQLInt },
        name:  { type: GraphQLString },
        type: { type: GraphQLString },
        recipe: { type: GraphQLString },
        dressings: { type: ( new GraphQLList(DressingType) ) },
    })
  });


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      salats: {
        type: new GraphQLList(SalatType),
        async resolve(parent, args) {
          const dressings = [
            {
                id: 1,
                name: "majonelka",
            },
            {
                id: 2,
                name: "tatarka",
            }
          ]
          const salats = [
            {id: 1, name: "zemiakovy", type: "domaci", recipe: "tajny", dressings},
            {id: 2, name: "parizsky", type: "specialny", recipe: "standardny", dressings}
          ]
          return salats;
        }
      },
      salat: {
        type: SalatType,
        args: {
          id: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            const dressings = [
                {
                    id: 1,
                    name: "majonelka",
                
                },
                {
                    id: 2,
                    name: "tatarka",
                
                }
              ]
            const salat = {id: 1, name: "zemiakovy", type: "domaci", recipe: "tajny", dressings}
            console.log(salat);
            return salat;
        }
    }
    }
});


export const schema = new GraphQLSchema({
    query: RootQuery
});

export default { schema };
