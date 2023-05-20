import React from "react";

function Blog() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-5"> Blog</h2>
      <div className="border-2 border-sky-500 bg-slate-300 mb-6">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">
            1.What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <h3 className="text-2">Answer :</h3>
          <p>
            An access token and a refresh token are used in authentication
            systems to grant authorized access to resources on behalf of a user.
            Access Token: An access token is a credential that is issued by an
            authentication server upon successful authentication of a user. It
            is a short-lived token that represents the user's authorization to
            access specific resources or perform certain actions. Access tokens
            are typically used in stateless authentication systems like OAuth
            2.0. They are included in the requests made to protected resources
            and are validated by the server to determine if the user has the
            necessary permissions. Refresh Token: A refresh token is a
            long-lived token that is also issued by the authentication server
            during the initial authentication process. Its purpose is to obtain
            a new access token once the original access token expires. Refresh
            tokens are securely stored by the client application and are not
            meant to be sent to the server with each request. Instead, when the
            access token expires, the client can use the refresh token to obtain
            a new access token without requiring the user to re-authenticate.
            The client application authenticates the user with their credentials
            (e.g., username and password) or other authentication methods. Upon
            successful authentication, the server issues an access token and a
            refresh token to the client. The client stores the access token and
            uses it to include in requests made to protected resources. This
            allows the server to verify the user's authorization. If the access
            token expires, the client can send a request to the authentication
            server, providing the refresh token.
          </p>
        </div>
      </div>
      <div className="border-2 border-sky-500 bg-slate-300 mb-6">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">
            2.Compare SQL and NoSQL databases?
          </h3>
          <h3 className="text-2">Answer :</h3>
          <p>
            SQL databases are like organized tables where data is stored in rows
            and columns. They have a fixed structure and use a language called
            SQL to interact with the data. They are good for applications that
            need structured data, complex queries, and strict consistency. NoSQL
            databases are more flexible and can store data in different ways,
            like key-value pairs, documents, or graphs. They don't use SQL but
            have their own ways of accessing and manipulating data. They are
            good for applications that need to handle large amounts of data,
            scale easily, and have changing data structures. So, SQL databases
            are like organized spreadsheets, while NoSQL databases are like
            flexible storage containers.
          </p>
        </div>
      </div>
      <div className="border-2 border-sky-500 bg-slate-300 mb-6">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">
            3.What is express js? What is Nest JS?
          </h3>
          <h3 className="text-2">Answer :</h3>
          <p>
            Express.js is a popular web application framework for Node.js. It
            provides a minimalistic and flexible set of features for building
            web servers and APIs. Express.js simplifies the process of handling
            HTTP requests, routing, and middleware integration. It allows
            developers to define routes, handle different types of HTTP
            requests, and process data sent by clients. Nest.js, on the other
            hand, is a framework for building scalable and efficient server-side
            applications with Node.js. It is built on top of Express.js and adds
            additional features and architectural patterns inspired by Angular
            (a popular front-end framework). Nest.js aims to provide a robust,
            modular, and maintainable structure for developing server-side
            applications. Nest.js uses TypeScript as its primary language, which
            adds strong typing and modern language features to the development
            process. It promotes the use of decorators and dependency injection
            to create modular and testable code. Nest.js also includes powerful
            features such as built-in support for WebSockets, GraphQL, and
            microservices architecture.
          </p>
        </div>
      </div>
      <div className="border-2 border-sky-500 bg-slate-300 mb-6">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3">
            4.What is MongoDB aggregate and how does it work ?
          </h3>
          <h3 className="text-2">Answer :</h3>
          <p>
            In MongoDB, the aggregate operation is a powerful and flexible way
            to perform complex data manipulations and analysis on collections of
            documents. It allows you to process and transform data within the
            database using a pipeline of stages. The aggregate operation works
            by taking an input collection and applying a sequence of stages to
            it. Each stage in the pipeline performs a specific operation on the
            data, such as filtering, grouping, projecting, sorting, or
            performing mathematical calculations. The output of one stage
            becomes the input for the next stage, forming a chain of
            transformations. Here's a high-level overview of the stages commonly
            used in an aggregation pipeline: $match: Filters the documents in
            the collection based on specified conditions. It works similar to
            the query operation, allowing you to match documents that meet
            certain criteria. $group: Groups documents together based on a
            specified key and performs aggregations within each group.
            Aggregation functions like counting, summing, averaging, and finding
            the maximum or minimum values can be applied. $project: Shapes the
            output documents by specifying the fields to include or exclude. It
            allows you to reshape the structure of the documents and perform
            calculations or transformations on the existing fields.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Blog;
