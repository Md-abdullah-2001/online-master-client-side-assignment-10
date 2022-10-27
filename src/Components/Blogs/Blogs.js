import React from "react";

const Blogs = () => {
  return (
    <div>
      <div
        className="accordion w-75 ms-5 ps-5"
        id="accordionPanelsStayOpenExample"
      >
        <h1 className="text-canter mb-5 mt-5">
          Find Your Question and Answers
        </h1>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              what is cors?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>Cross-origin resource sharing (CORS)</strong>
              is a browser security feature that restricts cross-origin HTTP
              requests that are initiated from scripts running in the browser.
              If your REST API's resources receive non-simple cross-origin HTTP
              requests, you need to enable CORS support. CORS Issue in Frontend
              Frameworks allow users to replicate the setup in development. As
              this setup is done at the server end, whenever a cross-origin
              request is made to the server, we can use middleware like
              http-proxy-middleware to proxy requests.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Why are you using firebase? What other options do you have to
              implement authentication?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>
                {" "}
                It is Firebase Authentication provides backend services,
              </strong>{" "}
              It is Firebase Authentication provides backend services,
              easy-to-use SDKs, and ready-made UI libraries to authenticate
              users to your app. It supports authentication using passwords,
              phone numbers, popular federated identity providers like Google,
              Facebook and Twitter, and more. Auth0, MongoDB, Passport, Okta,
              and Firebase are the most popular alternatives and competitors to
              Firebase Authentication.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How does the private route work ?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>It is The private route component</strong> It is The
              private route component is similar to the public route, the only
              change is that redirect URL and authenticate condition. If the
              user is not authenticated he will be redirected to the login page
              and the user can only access the authenticated routes If he is
              authenticated (Logged in).
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              What is Node? How does Node work?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <strong> Node.</strong> js is a JavaScript runtime environment
              that achieves low latency and high throughput by taking a
              “non-blocking” approach to serving requests. In other words, Node.
              js wastes no time or resources on waiting for I/O requests to
              return. What is node and how it works? Image result for What is
              Node? How does Node work? It is a used as backend service where
              javascript works on the server-side of the application. This way
              javascript is used on both frontend and backend. Node. js runs on
              chrome v8 engine which converts javascript code into machine code,
              it is highly scalable, lightweight, fast, and data-intensive
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
