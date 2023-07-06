import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class basicLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const functionName = 'Mikes-first-lambda';
    const lambdaPath = 'src/lambda/basic_lambda';

    const handler = new lambda.Function(this, functionName, {
      functionName,
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset(lambdaPath),
      handler: 'lambda_function.lambda_handler',
    });
  }
}
