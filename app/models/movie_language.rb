class MovieLanguage < ApplicationRecord
  belongs_to :movie
  belongs_to :language
  belongs_to :language_role
end
