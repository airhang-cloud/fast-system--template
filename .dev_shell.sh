#!/bin/bash
cur_path=$(readlink -f "$(dirname "$0")")
name=dist
# 暂存、提交工作区、推送远端
function INIT () {
	echo "本次更新内容:"
	read msg
	git add .
	git commit -m "更新内容:${msg}"
	git push origin master
	echo "最新提交记录:"
	git log -n1 --format=format:"%H"
}

# 构建
npm run build

# 复制
# cp -Rv ${cur_path}'/'${name} '../github'/${name}
cp -Rv ${cur_path}/${name}/* '../github'/${name}/

cd "../github/dist"

git pull

INIT