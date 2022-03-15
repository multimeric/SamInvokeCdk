# SAM + CDK Bug

To reproduce:

```bash
git clone git@github.com:multimeric/SamInvokeCdk.git
cd SamInvokeCdk
npm install
cdk synth
sam local invoke customImageLambdaECCCB1E0 -t cdk.out/TmpWxaZf33UfiStack.template.json
```
