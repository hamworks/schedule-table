#!/usr/bin/env bash

set -e

if [ $# -lt 1 ]; then
	echo "usage: $0 <version>"
	exit 1
fi

version=$1

sed -i '' -e "s/^ \* Version: .*/ * Version: ${version}/g" schedule-table.php;
sed -i '' -e "s/^ \* @version .*/ * @version ${version}/g" schedule-table.php;

rsync -a --exclude-from=.distignore ./ ./distribution/
cd distribution
zip -r ../schedule-table.zip ./
cd ../
rm -rf distribution
