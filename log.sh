gameclient_path=D:/work/uni-client/
txt_path=D:/work/uni-client/`date +%Y-%m-%d-%H_%M_%S.txt`
cd $gameclient_path
git pull -v --no-rebase --progress  "origin"
git log --pretty=format:"%ai , %an: %s" --since="1 day ago" | grep -v  "Merge branch 'master'" >>$txt_path
