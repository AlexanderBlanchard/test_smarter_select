# frozen_string_literal: true

class LanguagesController < ApplicationController
  def obtain_languages
    languages = Language.all
    render(json: languages)
  end
end
