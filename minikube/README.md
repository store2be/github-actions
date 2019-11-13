**This folder was cloned from https://github.com/CodingNagger/minikube-setup-action so we can be sure nothing is being changed.**

# Minikube setup action

This action installs a VM-free Kubernetes cluster using Minikube.

## Inputs

### `minikube-version`

**Required** Version of Minikube you wish to use. Default `"1.4.0"`.

### `k8s-version`

**Required** Version of Kubernetes you wish to use with Minikube. Default `"1.14.6"`.

## Outputs

### `launcher`

The command to run in order to start Minikube using `eval`.

## Example usage

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
    - name: Setup Minikube
      id: minikube
      uses: store2be/github-actions/minikube@master
    - name: Launch Minikube
      run: eval ${{ steps.minikube.outputs.launcher }}
    - name: Check pods
      run: |
        kubectl get pods
```
