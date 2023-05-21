import useTitle from "../../hooks/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="lg:p-20 px-2">
            <h2 className="text-4xl font-bold text-purple-800 border-b-4 pb-4 mb-8 border-purple-800 text-center">Four questions and answers</h2>
            <div className="space-y-6">
                {/* Question 1 */}
                <article>
                    <h3 className="text-3xl font-bold text-purple-700 mb-6">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <div className="text-gray-600 space-y-4 font-semibold">
                        <p>An access token is a credential that is used to authenticate and authorize a user's access to protected resources on a server. It typically contains information about the user and permissions granted. Access tokens have a limited lifespan and are used to make authenticated requests to the server.</p>

                        <p>A refresh token is a long-lived token that is used to obtain a new access token when the current one expires. It provides a way to maintain a user's session without requiring them to constantly log in. When the access token expires, the client can use the refresh token to obtain a new access token without prompting the user for their credentials again.</p>

                        <p>Both tokens should be securely stored on the client-side. The access token is typically stored in memory or a short-lived storage mechanism, like a browser's session storage, while the refresh token should be securely stored, such as in an HTTP-only cookie or a secure storage mechanism, to prevent unauthorized access. Storing the tokens securely helps protect against token theft and unauthorized access to user resources.</p>
                    </div>
                </article>

                {/* Question 2 */}
                <article>
                    <h3 className="text-3xl font-bold text-purple-700 mb-6">2. Compare SQL and NoSQL databases?</h3>
                    <div className="text-gray-600 space-y-4 font-semibold">
                        <p>SQL and NoSQL are two different types of database systems with distinct characteristics. SQL databases, also known as relational databases, organize data into tables with predefined schemas and enforce strict data consistency. They use structured query language (SQL) for data manipulation and support complex joins and transactions.</p>

                        <p>On the other hand, NoSQL databases, also known as non-relational databases, offer flexible and schema-less data models. They can handle large volumes of unstructured or semi-structured data. NoSQL databases provide horizontal scalability, high performance, and fault tolerance. They offer different data models like key-value, document, columnar, or graph databases, catering to diverse use cases.</p>

                        <p>While SQL databases are suitable for applications with structured and consistent data requirements, NoSQL databases excel in scenarios that require scalability, agility, and handling of diverse data types. The choice between SQL and NoSQL depends on factors such as data structure, scalability needs, performance requirements, and development flexibility.</p>
                    </div>
                </article>

                {/* Question 3 */}
                <article>
                    <h3 className="text-3xl font-bold text-purple-700 mb-6">3. What is express js? What is Nest JS</h3>
                    <div className="text-gray-600 space-y-4 font-semibold">
                        <p>Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. Express.js simplifies the development process by offering a set of robust features and middleware for handling routes, requests, responses, and other common web functionalities. It allows developers to create server-side applications using JavaScript and provides an ecosystem of plugins and extensions for added functionality.</p>

                        <p>NestJS, on the other hand, is a progressive Node.js framework that is built on top of Express.js. It follows a modular and opinionated architecture inspired by Angular. NestJS provides a structured and scalable approach to building server-side applications using TypeScript. It offers features like dependency injection, decorators, modules, and a powerful CLI tool. NestJS is well-suited for developing enterprise-grade applications with strong architectural patterns and easy integration with other libraries and frameworks.</p>

                        <p>In summary, Express.js is a lightweight and flexible web framework, while NestJS is a powerful and opinionated framework built on top of Express.js, providing additional structure and features for building scalable server-side applications.</p>
                    </div>
                </article>

                {/* Question 4 */}
                <article>
                    <h3 className="text-3xl font-bold text-purple-700 mb-6">4. What is MongoDB aggregate and how does it work ?</h3>
                    <div className="text-gray-600 space-y-4 font-semibold">
                        <p>MongoDB's `aggregate` is a framework for performing advanced data analysis and transformation on collections of documents. It allows you to process and manipulate data using a series of pipeline stages. Each stage represents a specific operation, such as filtering, grouping, sorting, or calculating aggregations. The documents flow through these stages, with each stage taking the input from the previous stage and producing output for the next stage. This enables you to perform complex data manipulations and computations within the database itself, reducing the need for multiple roundtrips between the application and the database.</p>

                        <p>The `aggregate` framework is highly flexible and powerful, providing capabilities for data transformation, aggregation, and statistical analysis, making it a valuable tool for performing sophisticated data processing tasks in MongoDB.</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blog;