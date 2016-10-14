# graphql-demo
DEMO the awesome power of graphql!

# demo site
http://graphql.kenichishibata.net/playground

## Example 
Get all members
```
{
  user{
    members {
      Name
      ldap
      Email
      Slack
      Github
    }
  }
}
```
Get all members matching the query
```
{
  user{
    members(ldap:"aalvarez1") {
      Name
      ldap
      Email
      Slack
      Github
    }
  }
}
```
Get one member matching the query
```
{
  user{
    member(Name: "Anna Alvarez") {
      Name
      ldap
      Email
      Slack
      Github
    }
  }
}
```



# Why should i even bother?
1. Formalize server-client contract (you get only what you need)
2. Strong querying language with static types (Relational Querying for NoSQL DBs anyone?)
3. Load multiple data in a single request (previously not possible with RestFul Architectures)
4. Portability (bring your own ORM, your own data, even your own RestFul API)
5. FutureProof (XML-RPC is the past, JSON-RestFul is the present, GQL-Overanything is the future)
6. GraphiQL is awesome


Still not convinced? [Checkout this video](https://www.youtube.com/watch?v=Oh5oC98ztvI)

(-NOTE-) Its not the best practice to use Graphql on top of RestFul APIs for obvious reasons. The best way to leverage the power of graphql is to use it directly on top of a data source. 


# what is graphql? 
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

A GraphQL query is a string interpreted by a server that returns data in a specified format. Here is an example query:
```
{
  user(id: 3500401) {
    id,
    name,
    isViewerFriend,
    profilePicture(size: 50)  {
      uri,
      width,
      height
    }
  }
}
```
And here is the response to that query.

```
{
  "user" : {
    "id": 3500401,
    "name": "Jing Chen",
    "isViewerFriend": true,
    "profilePicture": {
      "uri": "http://someurl.cdn/pic.jpg",
      "width": 50,
      "height": 50
    }
  }
}
```


[Source: Graphql.org](http://graphql.org/)

[Source: facebook blog](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html)


## TODO
- [x] Data from JSON filie
- [ ] Data from mongodb 
- [ ] Data from dynamodb
- [ ] Data from mysql (sequelize)
- [ ] mutation
- [x] query 
- [ ] tutorial blogpost
- [ ] boilerplate branch
