import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from "path";
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class TmpWxaZf33UfiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn = new lambda.DockerImageFunction(this, 'customImageLambda', {
      code: lambda.DockerImageCode.fromImageAsset(path.resolve(__dirname, '../src')),
    });

  }
}
