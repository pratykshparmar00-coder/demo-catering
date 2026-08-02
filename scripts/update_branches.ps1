git fetch origin
git checkout main
git pull origin main

$branches = @(
    "feature/skygod-hero-animations",
    "feature/skygod-booking-form",
    "feature/skygod-ui-components",
    "feature/pratyksh-menu-services",
    "feature/pratyksh-api-integrations",
    "feature/pratyksh-gallery-testimonials"
)

foreach ($branch in $branches) {
    Write-Host "Updating $branch"
    git checkout $branch
    git pull origin $branch
    git merge main -m "chore: merge main into $branch"
    git push origin $branch
}

git checkout main
