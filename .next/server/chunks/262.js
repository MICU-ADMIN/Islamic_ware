"use strict";
exports.id = 262;
exports.ids = [262];
exports.modules = {

/***/ 47262:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   search: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64592);

let sectionIndex = new flexsearch__WEBPACK_IMPORTED_MODULE_0__.Document({
    tokenize: "full",
    document: {
        id: "url",
        index: "content",
        store: [
            "title",
            "pageTitle"
        ]
    },
    context: {
        resolution: 9,
        depth: 2,
        bidirectional: true
    }
});
let data = [
    {
        "url": "/",
        "sections": [
            [
                "API Documentation",
                null,
                [
                    "Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users. ",
                    "Quickstart",
                    "Explore SDKs"
                ]
            ],
            [
                "Getting started ",
                "getting-started",
                [
                    "To get started, create a new application in your developer settings, then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our integrations directory to reach the Protocol community. ",
                    "Get your API key"
                ]
            ]
        ]
    },
    {
        "url": "/attachments",
        "sections": [
            [
                "Attachments",
                null,
                [
                    "Attachments are how you share things in Protocol — they allow you to send all sorts of files to your contacts and groups. On this page, we'll dive into the different attachment endpoints you can use to manage attachments programmatically. We'll look at how to query, upload, update, and delete attachments. "
                ]
            ],
            [
                "The attachment model",
                "the-attachment-model",
                [
                    "The attachment model contains all the information about the files you send to your contacts and groups, including the name, type, and size.",
                    "Properties",
                    "Unique identifier for the attachment.",
                    "Unique identifier for the message associated with the attachment.",
                    "The filename for the attachment.",
                    "The URL for the attached file.",
                    "The MIME type of the attached file.",
                    "The file size of the attachment in bytes.",
                    "Timestamp of when the attachment was created."
                ]
            ],
            [
                "List all attachments ",
                "list-all-attachments",
                [
                    "This endpoint allows you to retrieve a paginated list of all your attachments (in a conversation if a conversation id is provided). By default, a maximum of ten attachments are shown per page.",
                    "Optional attributes",
                    "Limit to attachments from a given conversation.",
                    "Limit the number of attachments returned."
                ]
            ],
            [
                "Create an attachment ",
                "create-an-attachment",
                [
                    "This endpoint allows you to upload a new attachment to a conversation. See the code examples for how to send the file to the Protocol API.",
                    "Required attributes",
                    "The file you want to add as an attachment."
                ]
            ],
            [
                "Retrieve an attachment ",
                "retrieve-an-attachment",
                [
                    "This endpoint allows you to retrieve an attachment by providing the attachment id. Refer to the list at the top of this page to see which properties are included with attachment objects."
                ]
            ],
            [
                "Update an attachment ",
                "update-an-attachment",
                [
                    "This endpoint allows you to perform an update on an attachment. Currently, the only supported type of update is changing the filename.",
                    "Optional attributes",
                    "The new filename for the attachment."
                ]
            ],
            [
                "Delete an attachment ",
                "delete-an-attachment",
                [
                    "This endpoint allows you to delete attachments. Note: This will permanently delete the file."
                ]
            ]
        ]
    },
    {
        "url": "/authentication",
        "sections": [
            [
                "Authentication",
                null,
                [
                    "You'll need to authenticate your requests to access any of the endpoints in the Protocol API. In this guide, we'll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token — OAuth2 is the recommended way. "
                ]
            ],
            [
                "Basic authentication",
                "basic-authentication",
                [
                    "With basic authentication, you use your username and password to authenticate your HTTP requests. Unless you have a very good reason, you probably shouldn't use basic auth. Here's how to authenticate using cURL:",
                    "Please don't commit your Protocol password to GitHub!"
                ]
            ],
            [
                "OAuth2 with bearer token",
                "o-auth2-with-bearer-token",
                [
                    "The recommended way to authenticate with the Protocol API is by using OAuth2. When establishing a connection using OAuth2, you will need your access token — you will find it in the Protocol dashboard under API settings. Here's how to add the token to the request header using cURL:",
                    "Always keep your token safe and reset it if you suspect it has been compromised."
                ]
            ],
            [
                "Using an SDK",
                "using-an-sdk",
                [
                    "If you use one of our official SDKs, you won't have to worry about any of the above — fetch your access token from the Protocol dashboard under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes.",
                    "Check out our list of first-party SDKs"
                ]
            ]
        ]
    },
    {
        "url": "/contacts",
        "sections": [
            [
                "Contacts",
                null,
                [
                    "As the name suggests, contacts are a core part of Protocol — the very reason Protocol exists is so you can have secure conversations with your contacts. On this page, we'll dive into the different contact endpoints you can use to manage contacts programmatically. We'll look at how to query, create, update, and delete contacts. "
                ]
            ],
            [
                "The contact model",
                "the-contact-model",
                [
                    "The contact model contains all the information about your contacts, such as their username, avatar, and phone number. It also contains a reference to the conversation between you and the contact and information about when they were last active on Protocol.",
                    "Properties",
                    "Unique identifier for the contact.",
                    "The username for the contact.",
                    "The phone number for the contact.",
                    "The avatar image URL for the contact.",
                    "The contact display name in the contact list. By default, this is just the\nusername.",
                    "Unique identifier for the conversation associated with the contact.",
                    "Timestamp of when the contact was last active on the platform.",
                    "Timestamp of when the contact was created."
                ]
            ],
            [
                "List all contacts ",
                "list-all-contacts",
                [
                    "This endpoint allows you to retrieve a paginated list of all your contacts. By default, a maximum of ten contacts are shown per page.",
                    "Optional attributes",
                    "Limit the number of contacts returned."
                ]
            ],
            [
                "Create a contact ",
                "create-a-contact",
                [
                    "This endpoint allows you to add a new contact to your contact list in Protocol. To add a contact, you must provide their Protocol username and phone number.",
                    "Required attributes",
                    "The username for the contact.",
                    "The phone number for the contact.",
                    "Optional attributes",
                    "The avatar image URL for the contact.",
                    "The contact display name in the contact list. By default, this is just the username."
                ]
            ],
            [
                "Retrieve a contact ",
                "retrieve-a-contact",
                [
                    "This endpoint allows you to retrieve a contact by providing their Protocol id. Refer to the list at the top of this page to see which properties are included with contact objects."
                ]
            ],
            [
                "Update a contact ",
                "update-a-contact",
                [
                    "This endpoint allows you to perform an update on a contact. Currently, the only attribute that can be updated on contacts is the display_name attribute which controls how a contact appears in your contact list in Protocol.",
                    "Optional attributes",
                    "The contact display name in the contact list. By default, this is just the username."
                ]
            ],
            [
                "Delete a contact ",
                "delete-a-contact",
                [
                    "This endpoint allows you to delete contacts from your contact list in Protocol. Note: This will also delete your conversation with the given contact."
                ]
            ]
        ]
    },
    {
        "url": "/conversations",
        "sections": [
            [
                "Conversations",
                null,
                [
                    "Conversations are an essential part of Protocol — they are the containers for the messages between you, your contacts, and groups. On this page, we’ll dive into the different conversation endpoints you can use to manage conversations programmatically. We'll look at how to query, create, update, and delete conversations. "
                ]
            ],
            [
                "The conversation model",
                "the-conversation-model",
                [
                    "The conversation model contains all the information about the conversations between you and your contacts. In addition, conversations can also be group-based with more than one contact, they can have a pinned message, and they can be muted.",
                    "Properties",
                    "Unique identifier for the conversation.",
                    "Unique identifier for the other contact in the conversation.",
                    "Unique identifier for the group that the conversation belongs to.",
                    "Unique identifier for the pinned message.",
                    "Whether or not the conversation has been pinned.",
                    "Whether or not the conversation has been muted.",
                    "Timestamp of when the conversation was last active.",
                    "Timestamp of when the conversation was last opened by the authenticated\nuser.",
                    "Timestamp of when the conversation was created.",
                    "Timestamp of when the conversation was archived."
                ]
            ],
            [
                "List all conversations ",
                "list-all-conversations",
                [
                    "This endpoint allows you to retrieve a paginated list of all your conversations. By default, a maximum of ten conversations are shown per page.",
                    "Optional attributes",
                    "Limit the number of conversations returned.",
                    "Only show conversations that are muted when set to true.",
                    "Only show conversations that are archived when set to true.",
                    "Only show conversations that are pinned when set to true.",
                    "Only show conversations for the specified group."
                ]
            ],
            [
                "Create a conversation ",
                "create-a-conversation",
                [
                    "This endpoint allows you to add a new conversation between you and a contact or group. A contact or group id is required to create a conversation.",
                    "Required attributes",
                    "Unique identifier for the other contact in the conversation.",
                    "Unique identifier for the group that the conversation belongs to."
                ]
            ],
            [
                "Retrieve a conversation ",
                "retrieve-a-conversation",
                [
                    "This endpoint allows you to retrieve a conversation by providing the conversation id. Refer to the list at the top of this page to see which properties are included with conversation objects."
                ]
            ],
            [
                "Update a conversation ",
                "update-a-conversation",
                [
                    "This endpoint allows you to perform an update on a conversation. Examples of updates are pinning a message, muting or archiving the conversation, or pinning the conversation itself.",
                    "Optional attributes",
                    "Unique identifier for the pinned message.",
                    "Whether or not the conversation has been pinned.",
                    "Whether or not the conversation has been muted.",
                    "Timestamp of when the conversation was archived."
                ]
            ],
            [
                "Delete a conversation ",
                "delete-a-conversation",
                [
                    "This endpoint allows you to delete your conversations in Protocol. Note: This will permanently delete the conversation and all its messages — archive it instead if you want to be able to restore it later."
                ]
            ]
        ]
    },
    {
        "url": "/errors",
        "sections": [
            [
                "Errors",
                null,
                [
                    "In this guide, we will talk about what happens when something goes wrong while you work with the API. Mistakes happen, and mostly they will be yours, not ours. Let's look at some status codes and error types you might encounter. ",
                    "You can tell if your request was successful by checking the status code when receiving an API response. If a response comes back unsuccessful, you can use the error type and error message to figure out what has gone wrong and do some rudimentary debugging (before contacting support).",
                    "Before reaching out to support with an error, please be aware that 99% of all\nreported errors are, in fact, user errors. Therefore, please carefully check\nyour code before contacting Protocol support."
                ]
            ],
            [
                "Status codes",
                "status-codes",
                [
                    "Here is a list of the different categories of status codes returned by the Protocol API. Use these to understand if a request was successful.",
                    "A 2xx status code indicates a successful response.",
                    "A 4xx status code indicates a client error — this means it's a you\nproblem.",
                    "A 5xx status code indicates a server error — you won't be seeing these."
                ]
            ],
            [
                "Error types",
                "error-types",
                [
                    "Whenever a request is unsuccessful, the Protocol API will return an error response with an error type and message. You can use this information to understand better what has gone wrong and how to fix it. Most of the error messages are pretty helpful and actionable.",
                    "Here is a list of the two error types supported by the Protocol API — use these to understand what you have done wrong.",
                    "This means that we made an error, which is highly speculative and unlikely.",
                    "This means that you made an error, which is much more likely."
                ]
            ]
        ]
    },
    {
        "url": "/groups",
        "sections": [
            [
                "Groups",
                null,
                [
                    "Groups are where communities live in Protocol — they are a collection of contacts you're talking to all at once. On this page, we'll dive into the different group endpoints you can use to manage groups programmatically. We'll look at how to query, create, update, and delete groups. "
                ]
            ],
            [
                "The group model",
                "the-group-model",
                [
                    "The group model contains all the information about your groups, including what contacts are in the group and the group's name, description, and avatar.",
                    "Properties",
                    "Unique identifier for the group.",
                    "The name for the group.",
                    "The description for the group.",
                    "The avatar image URL for the group.",
                    "Unique identifier for the conversation that belongs to the group.",
                    "An array of contact objects that are members of the group.",
                    "Timestamp of when the group was created.",
                    "Timestamp of when the group was archived."
                ]
            ],
            [
                "List all groups ",
                "list-all-groups",
                [
                    "This endpoint allows you to retrieve a paginated list of all your groups. By default, a maximum of ten groups are shown per page.",
                    "Optional attributes",
                    "Limit the number of groups returned.",
                    "Only show groups that are archived when set to true."
                ]
            ],
            [
                "Create a group ",
                "create-a-group",
                [
                    "This endpoint allows you to create a new group conversation between you and a group of your Protocol contacts.",
                    "Required attributes",
                    "The name for the group.",
                    "Optional attributes",
                    "The description for the group.",
                    "The avatar image URL for the group.",
                    "An array of contact objects that are members of the group."
                ]
            ],
            [
                "Retrieve a group ",
                "retrieve-a-group",
                [
                    "This endpoint allows you to retrieve a group by providing the group id. Refer to the list at the top of this page to see which properties are included with group objects."
                ]
            ],
            [
                "Update a group ",
                "update-a-group",
                [
                    "This endpoint allows you to perform an update on a group. Examples of updates are changing the name, description, and avatar or adding and removing contacts from the group.",
                    "Optional attributes",
                    "The new name for the group.",
                    "The new description for the group.",
                    "The new avatar image URL for the group.",
                    "An array of contact objects that are members of the group.",
                    "Timestamp of when the group was archived."
                ]
            ],
            [
                "Delete a group ",
                "delete-a-group",
                [
                    "This endpoint allows you to delete groups. Note: This will permanently delete the group, including the messages — archive it instead if you want to be able to restore it later."
                ]
            ]
        ]
    },
    {
        "url": "/messages",
        "sections": [
            [
                "Messages",
                null,
                [
                    "Messages are what conversations are made of in Protocol — they are the basic building blocks of your conversations with your Protocol contacts. On this page, we'll dive into the different message endpoints you can use to manage messages programmatically. We'll look at how to query, send, update, and delete messages. "
                ]
            ],
            [
                "The message model",
                "the-message-model",
                [
                    "The message model contains all the information about the messages and attachments you send to your contacts and groups, including how your contacts have reacted to them.",
                    "Properties",
                    "Unique identifier for the message.",
                    "Unique identifier for the conversation the message belongs to.",
                    "The contact object for the contact who sent the message.",
                    "The message content.",
                    "An array of reaction objects associated with the message.",
                    "An array of attachment objects associated with the message.",
                    "Timestamp of when the message was read.",
                    "Timestamp of when the message was created.",
                    "Timestamp of when the message was last updated."
                ]
            ],
            [
                "List all messages ",
                "list-all-messages",
                [
                    "This endpoint allows you to retrieve a paginated list of all your messages (in a conversation if a conversation id is provided). By default, a maximum of ten messages are shown per page.",
                    "Optional attributes",
                    "Limit to messages from a given conversation.",
                    "Limit the number of messages returned."
                ]
            ],
            [
                "Send a message ",
                "send-a-message",
                [
                    "This endpoint allows you to send a new message to one of your conversations.",
                    "Required attributes",
                    "Unique identifier for the conversation the message belongs to.",
                    "The message content.",
                    "Optional attributes",
                    "An array of attachment objects associated with the message."
                ]
            ],
            [
                "Retrieve a message ",
                "retrieve-a-message",
                [
                    "This endpoint allows you to retrieve a message by providing the message id. Refer to the list at the top of this page to see which properties are included with message objects."
                ]
            ],
            [
                "Update a message ",
                "update-a-message",
                [
                    "This endpoint allows you to perform an update on a message. Examples of updates are adding a reaction, editing the message, or adding an attachment.",
                    "Optional attributes",
                    "The message content.",
                    "An array of reaction objects associated with the message.",
                    "An array of attachment objects associated with the message."
                ]
            ],
            [
                "Delete a message ",
                "delete-a-message",
                [
                    "This endpoint allows you to delete messages from your conversations. Note: This will permanently delete the message."
                ]
            ]
        ]
    },
    {
        "url": "/pagination",
        "sections": [
            [
                "Pagination",
                null,
                [
                    "In this guide, we will look at how to work with paginated responses when querying the Protocol API. By default, all responses limit results to ten. However, you can go as high as 100 by adding a limit parameter to your requests. If you are using one of the official Protocol API client libraries, you don't need to worry about pagination, as it's all being taken care of behind the scenes. ",
                    "When an API response returns a list of objects, no matter the amount, pagination is supported. In paginated responses, objects are nested in a data attribute and have a has_more attribute that indicates whether you have reached the end of the last page. You can use the starting_after and endding_before query parameters to browse pages."
                ]
            ],
            [
                "Example using cursors",
                "example-using-cursors",
                [
                    "In this example, we request the page that starts after the conversation with id s4WycXedwhQrEFuM. As a result, we get a list of three conversations and can tell by the has_more attribute that we have reached the end of the resultset.",
                    "The last ID on the page you're currently on when you want to fetch the next page.",
                    "The first ID on the page you're currently on when you want to fetch the previous page.",
                    "Limit the number of items returned."
                ]
            ]
        ]
    },
    {
        "url": "/quickstart",
        "sections": [
            [
                "Quickstart",
                null,
                [
                    "This guide will get you all set up and ready to use the Protocol API. We'll cover how to get started using one of our API clients and how to make your first API request. We'll also look at where to go next to find all the information you need to take full advantage of our powerful REST API. ",
                    "Before you can make requests to the Protocol API, you will need to grab your\nAPI key from your dashboard. You find it under Settings \xbb API."
                ]
            ],
            [
                "Choose your client",
                "choose-your-client",
                [
                    "Before making your first API request, you need to pick which API client you will use. In addition to good ol' cURL HTTP requests, Protocol offers clients for JavaScript, Python, and PHP. In the following example, you can see how to install each client.",
                    "Check out our list of first-party SDKs"
                ]
            ],
            [
                "Making your first API request",
                "making-your-first-api-request",
                [
                    "After picking your preferred client, you are ready to make your first call to the Protocol API. Below, you can see how to send a GET request to the Conversations endpoint to get a list of all your conversations. In the cURL example, results are limited to ten conversations, the default page length for each client.",
                    "Read the docs for the Conversations endpoint"
                ]
            ],
            [
                "What's next?",
                "whats-next",
                [
                    "Great, you're now set up with an API client and have made your first request to the API. Here are a few links that might be handy as you venture further into the Protocol API:",
                    "Grab your API key from the Protocol dashboard",
                    "Check out the Conversations endpoint",
                    "Learn about the different error messages in Protocol"
                ]
            ]
        ]
    },
    {
        "url": "/sdks",
        "sections": [
            [
                "Protocol SDKs",
                null,
                [
                    "The recommended way to interact with the Protocol API is by using one of our official SDKs. Today, Protocol offers fine-tuned JavaScript, Ruby, PHP, Python, and Go libraries to make your life easier and give you the best experience when consuming the API. "
                ]
            ]
        ]
    },
    {
        "url": "/webhooks",
        "sections": [
            [
                "Webhooks",
                null,
                [
                    "In this guide, we will look at how to register and consume webhooks to integrate your app with Protocol. With webhooks, your app can know when something happens in Protocol, such as someone sending a message or adding a contact. "
                ]
            ],
            [
                "Registering webhooks",
                "registering-webhooks",
                [
                    "To register a new webhook, you need to have a URL in your app that Protocol can call. You can configure a new webhook from the Protocol dashboard under API settings. Give your webhook a name, pick the events you want to listen for, and add your URL.",
                    "Now, whenever something of interest happens in your app, a webhook is fired off by Protocol. In the next section, we'll look at how to consume webhooks."
                ]
            ],
            [
                "Consuming webhooks",
                "consuming-webhooks",
                [
                    "When your app receives a webhook request from Protocol, check the type attribute to see what event caused it. The first part of the event type will tell you the payload type, e.g., a conversation, message, etc.",
                    "In the example above, a conversation was updated, and the payload type is a conversation.",
                    "See all event types"
                ]
            ],
            [
                "Event types",
                "event-types",
                [
                    "A new contact was created.",
                    "An existing contact was updated.",
                    "A contact was successfully deleted.",
                    "A new conversation was created.",
                    "An existing conversation was updated.",
                    "A conversation was successfully deleted.",
                    "A new message was created.",
                    "An existing message was updated.",
                    "A message was successfully deleted.",
                    "A new group was created.",
                    "An existing group was updated.",
                    "A group was successfully deleted.",
                    "A new attachment was created.",
                    "An existing attachment was updated.",
                    "An attachment was successfully deleted."
                ]
            ],
            [
                "Security",
                "security",
                [
                    "To know for sure that a webhook was, in fact, sent by Protocol instead of a malicious actor, you can verify the request signature. Each webhook request contains a header named x-protocol-signature, and you can verify this signature by using your secret webhook key. The signature is an HMAC hash of the request payload hashed using your secret key. Here is an example of how to verify the signature in your app:",
                    "If your generated signature matches the x-protocol-signature header, you can be sure that the request was truly coming from Protocol. It's essential to keep your secret webhook key safe — otherwise, you can no longer be sure that a given webhook was sent by Protocol. Don't commit your secret webhook key to GitHub!"
                ]
            ]
        ]
    }
];
for (let { url, sections } of data){
    for (let [title, hash, content] of sections){
        sectionIndex.add({
            url: url + (hash ? "#" + hash : ""),
            title,
            content: [
                title,
                ...content
            ].join("\n"),
            pageTitle: hash ? sections[0][0] : undefined
        });
    }
}
function search(query, options = {}) {
    let result = sectionIndex.search(query, {
        ...options,
        enrich: true
    });
    if (result.length === 0) {
        return [];
    }
    return result[0].result.map((item)=>({
            url: item.id,
            title: item.doc.title,
            pageTitle: item.doc.pageTitle
        }));
}


/***/ })

};
;