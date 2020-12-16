class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
  projects = Project.all 

  render :json => projects
  end
end
