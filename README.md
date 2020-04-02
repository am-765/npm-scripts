# npm-scripts
LPなど小規模制作の開発環境。  
srcが開発ディレクトリ、distが納品ディレクトリ。  
distは中のファイル類が圧縮されて出力される。  

# Dependency
|  HTML  |  CSS  |
| ---- | ---- | 
|  Pug  |  Stylus  |

JavaScriptはBabelで変換。

# Setup
```
yarn install
```
yarn install もしくは npm installでnode_modulesを作成。

# Usage
```
yarn build
```
buildでdistディレクトリを出力。

```
yarn watch
```
watchで変更を監視。
