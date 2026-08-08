# Compatibility patch: Ruby 3.2+ removed Object#tainted? / Object#taint.
# Jekyll 3.9 / Liquid 4.0.3 (pinned by the github-pages gem) still call
# obj.tainted? during rendering. This restores a no-op implementation so
# the site builds locally on modern Ruby. GitHub Pages runs an older Ruby
# and does not need this patch, but it is harmless there too.

class Object
  def tainted?
    false
  end

  def taint
    self
  end

  def untaint
    self
  end
end