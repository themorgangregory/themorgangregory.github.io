source "https://rubygems.org"

# Ruby 3.4+ removed several gems from the standard library.
# Jekyll 3.9 (pinned by github-pages) still needs them.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "webrick"

# Load the Ruby 3.2+ compatibility patch before Jekyll starts.
# (github-pages runs Jekyll in safe mode, which ignores _plugins/.)
require_relative "_plugins/taint_patch"

# Official GitHub Pages configuration
gem "github-pages", group: :jekyll_plugins

# Local-only plugins (not available on GitHub Pages)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]