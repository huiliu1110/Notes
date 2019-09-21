What is `Vulnerable Dependencies`? 


yarn audit

https://snyk.io/vuln/npm:lodash

---



Github provides security alerts. For example:

1. lodash.template
2. js-yaml

There are several levels: critical severity, high severity, moderate severity, low severity.

What I did:

1) dig into yarn.lock file, and manually create dependency graph. like following:

```
lerna@^3.4.3:
  |_"@lerna/changed@^3.4.1":
  |_"@lerna/publish@^3.4.3":
  |_"@lerna/version@^3.4.1":
      |_"@lerna/conventional-commits@^3.4.1":
          |_conventional-changelog-core@^3.1.0:
          |_conventional-recommended-bump@^4.0.1:
              |_git-raw-commits@2.0.0:
                  |_lodash.template "^4.0.2"

sw-precache-webpack-plugin@^0.11.4:
  |_sw-precache@^5.2.1:
      |_lodash.template "^4.4.0"
```

```
eslint@^4.3.0:
  |_js-yaml "^3.9.1"

jest@^22.0.4:
jest@^23.6.0:
  |_jest-cli@^22.4.4:
  |_jest-cli@^23.6.0:
      |_istanbul-api@^1.1.14, istanbul-api@^1.3.1:
            |_js-yaml "^3.7.0"

"@storybook/react@^3.3.15":
  |_"@storybook/core@3.4.10":
      |_css-loader@^0.28.11, css-loader@^0.28.7:
          |_cssnano@^3.10.0:
              |_postcss-svgo@^2.1.1:
                  |_svgo@^0.7.0:
                      |_js-yaml "~3.7.0"
```

2) Upgrade each direct dependency manually. For example,

Upgrade `lerna` to latest: v3.16.4, it turns out
even the lerna author already upgraded `lodash.template` in `@lerna/conventional-commits`, 
but the sub dependencies like `conventional-changelog-core` and `conventional-recommended-bump` are not been updated.

Upgrade `@storybook/react` from `3.3.15` to `5.2.1`.
It is a major upgrade, and some other dependencies breaks. See a lot of warnings with yarn install command, and circleci tests are failed. 

3) google and found an easy way to fix this issue.

https://blog.shovonhasan.com/fixing-a-security-vulnerability-in-a-transitive-dependency/
https://yarnpkg.com/en/package/resolution


4) to check package secrity website: https://snyk.io/vuln/npm:storybook

5) some concepts:
indirect dependencies.



