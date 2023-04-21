import { SecretsManager } from "aws-sdk";
const client = new SecretsManager({ region: "us-east-1" })
const secret_name = "prod/gh/keys";
const params = {
  SecretId: secret_name,
  VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
}
const getSecretValue = async function() {
  const data = client.getSecretValue(params)
  return data
}

getSecretValue().then(data => {
  console.log(data)
  console.log(data.SecretString)
})

