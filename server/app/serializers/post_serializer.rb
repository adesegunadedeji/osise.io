class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :job_title, :department, :profile_image
  def profile_image
    if object.profile_image.attached?
      {
        url: rails_blob_url(object.profile_image)
      }
    end
  end
end