#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3BucketStack } from '../lib/s3-bucket-stack';
import { basicLambdaStack } from '../lib/basic-lambda-stack';

const app = new cdk.App();

//creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'myS3Stack');

//reusing assets
const bucket = s3_bucket_stack.bucket;

//deploying the basic lambda function
const basic_lambda_stack = new basicLambdaStack(app, 'basicLambdaStack');
