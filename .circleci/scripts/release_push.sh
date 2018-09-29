#!/bin/bash

# gitユーザ設定
git config --global user.email "38fanjia+github@gmail.com" #コミットユーザの有効なメールアドレス
git config --global user.name "38fanjia" #コミットユーザの名前

# リリースバージョン名
CI_RELEASE_VERSION=`date +"v%Y%m%d%H%M%S"`
# リリースブランチ名
CI_RELEASE_BRANCH="feature/${CI_RELEASE_VERSION}"
# リモートリポジトリ(github.io)
CI_REMOTE_REPOSITORY="git@github.com:${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_USERNAME}.github.io.git"
# リリースブランチ作成
git checkout -b ${CI_RELEASE_BRANCH}
#変更ファイルををすべて追加
git add --all :/
#コミット
git commit -m "[auto] release branch (${CI_RELEASE_VERSION})"
#リモートにプッシュ
git push ${CI_REMOTE_REPOSITORY} ${CI_RELEASE_BRANCH}
