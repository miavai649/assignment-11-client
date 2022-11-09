import React from "react";

const Blog = () => {
  return (
    <div className="h-screen">
      <h2 className="text-center text-4xl my-10">Blog</h2>
      <div className="mx-24">
        {/* question-1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            01. What is JWT, and how does it work?
          </div>
          <div className="collapse-content text-lg">
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>
            <p>
              A JWT is a string made up of three parts, separated by dots (.),
              and serialized using base64. In the most common serialization
              format, compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:
            </p>
            <ul>
              <li>1. The header and the payload.</li>
              <li>2. The signature.</li>
            </ul>
            <p>
            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
            </p>
          </div>
        </div>
        {/* question-2 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            02. Difference between SQL and NoSQL.
          </div>
          <div className="collapse-content text-lg">
          <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>SQL</th>
        <th>NoSQL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>SQL databases are relational.</td>
        <td>NoSQL databases are non-relational.</td>
      </tr>
      <tr>
        <th>2</th>
        <td>SQL databases use structured query language and have a predefined schema.</td>
        <td>NoSQL databases have dynamic schemas for unstructured data.</td>
      </tr>
      <tr>
        <th>3</th>
        <td>SQL databases are vertically scalable.</td>
        <td>NoSQL databases are horizontally scalable.</td>
      </tr>
      <tr>
        <th>4</th>
        <td>SQL databases are table-based.</td>
        <td>NoSQL databases are document, key-value, graph, or wide-column stores.</td>
      </tr>
      <tr>
        <th>5</th>
        <td>SQL databases are better for multi-row transactions.</td>
        <td>while NoSQL is better for unstructured data like documents or JSON.</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
        </div>
        {/* question-3 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            03. What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content text-lg">
          <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Javascript</th>
        <th>NodeJS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Javascript is a programming language that is used for writing scripts on the website.</td>
        <td>NodeJS is a Javascript runtime environment.</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Javascript can only be run in the browsers.</td>
        <td>We can run Javascript outside the browser with the help of NodeJS.</td>
      </tr>
      <tr>
        <th>3</th>
        <td>It is basically used on the client-side.</td>
        <td>It is mostly used on the server-side.</td>
      </tr>
      <tr>
        <th>4</th>
        <td>Javascript is capable enough to add HTML and play with the DOM.</td>
        <td>Nodejs does not have capability to add HTML tags.</td>
      </tr>
      <tr>
        <th>5</th>
        <td>Javascript is used in frontend development.</td>
        <td>Nodejs is used in server-side development.</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
        </div>
        {/* question-4 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            04. How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content text-lg">
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>
            <p>
              A JWT is a string made up of three parts, separated by dots (.),
              and serialized using base64. In the most common serialization
              format, compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:
            </p>
            <ul>
              <li>1. The header and the payload.</li>
              <li>2. The signature.</li>
            </ul>
            <p>
            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
