# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{grit}
  s.version = "2.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Tom Preston-Werner", "Scott Chacon"]
  s.date = %q{2010-09-29}
  s.description = %q{Grit is a Ruby library for extracting information from a git repository in an object oriented manner.}
  s.email = %q{tom@github.com}
  s.extra_rdoc_files = ["README.md", "LICENSE"]
  s.files = ["API.txt", "History.txt", "LICENSE", "PURE_TODO", "README.md", "Rakefile", "benchmarks.rb", "benchmarks.txt", "examples/ex_add_commit.rb", "examples/ex_index.rb", "grit.gemspec", "lib/grit.rb", "lib/grit/actor.rb", "lib/grit/blame.rb", "lib/grit/blob.rb", "lib/grit/commit.rb", "lib/grit/commit_stats.rb", "lib/grit/config.rb", "lib/grit/diff.rb", "lib/grit/errors.rb", "lib/grit/git-ruby.rb", "lib/grit/git-ruby/commit_db.rb", "lib/grit/git-ruby/file_index.rb", "lib/grit/git-ruby/git_object.rb", "lib/grit/git-ruby/internal/file_window.rb", "lib/grit/git-ruby/internal/loose.rb", "lib/grit/git-ruby/internal/pack.rb", "lib/grit/git-ruby/internal/raw_object.rb", "lib/grit/git-ruby/object.rb", "lib/grit/git-ruby/repository.rb", "lib/grit/git.rb", "lib/grit/index.rb", "lib/grit/lazy.rb", "lib/grit/merge.rb", "lib/grit/open3_detach.rb", "lib/grit/ref.rb", "lib/grit/repo.rb", "lib/grit/ruby1.9.rb", "lib/grit/status.rb", "lib/grit/submodule.rb", "lib/grit/tag.rb", "lib/grit/tree.rb"]
  s.homepage = %q{http://github.com/mojombo/grit}
  s.rdoc_options = ["--charset=UTF-8"]
  s.require_paths = ["lib"]
  s.rubyforge_project = %q{grit}
  s.rubygems_version = %q{1.3.7}
  s.summary = %q{Ruby Git bindings.}

  if s.respond_to? :specification_version then
    current_version = Gem::Specification::CURRENT_SPECIFICATION_VERSION
    s.specification_version = 2

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<mime-types>, ["~> 1.15"])
      s.add_runtime_dependency(%q<diff-lcs>, ["~> 1.1"])
      s.add_development_dependency(%q<mocha>, [">= 0"])
    else
      s.add_dependency(%q<mime-types>, ["~> 1.15"])
      s.add_dependency(%q<diff-lcs>, ["~> 1.1"])
      s.add_dependency(%q<mocha>, [">= 0"])
    end
  else
    s.add_dependency(%q<mime-types>, ["~> 1.15"])
    s.add_dependency(%q<diff-lcs>, ["~> 1.1"])
    s.add_dependency(%q<mocha>, [">= 0"])
  end
end
