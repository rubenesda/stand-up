## AWS Amplify Next.js (App Router)

This repository provides an application for remembering you the times you must stand up from your chair. This is using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview about AWS Amplify Next.js template

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Getting Started

First of all, you must employ a valid Node.JS. Here, we employed version 20.11.0. You can use the next commnad with  `nvm` (Node Version Manager) to move out

```bash
nvm use
```

Then, you must install nodejs packages. We emplpoyed `npm` approach

```bash
npm i
```

Once the nodejs packages installed you should employ your AWS credentials. You can configure them either a profile or put them on the terminal. We employed the terminal. Remember, this credentials should have enough permissions for using Amplify, DynamoDB, CloudFormation, S3, Lambda.

```bash
export AWS_ACCESS_KEY_ID='AKEXAMPLE'
export AWS_SECRET_ACCESS_KEY='wEXAMPLE'
export AWS_DEFAULT_REGION='us-east-1'
```

Finally, you are ready to run it locally. Cloudformation will create a Sandbox stack and will deploy the resource for this environment. This won't affect your production environment

```bash
npx ampx sandbox
```

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.