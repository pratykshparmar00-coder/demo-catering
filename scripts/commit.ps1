git checkout -b feature/nextjs-migration
$files = git ls-files -m -d -o --exclude-standard
foreach ($file in $files) {
    if (Test-Path -Path $file) {
        git add $file
        git commit -m "chore: update $file"
    } else {
        git rm $file
        git commit -m "chore: remove $file"
    }
}
git push -u origin feature/nextjs-migration
