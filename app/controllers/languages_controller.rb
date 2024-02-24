# frozen_string_literal: true

class LanguagesController < ApplicationController
  def obtain_languages
    languages =
      Rails.cache.fetch('languages', expires_in: 12.hours) do
        Language.all.to_a
      end
    render(json: languages)
  end
end
