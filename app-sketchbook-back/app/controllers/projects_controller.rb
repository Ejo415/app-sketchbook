class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
  projects = Project.all 

  render :json => projects
  end

  def create 
    user = User.find_by_id(params[:user][:id])
        
    project = user.projects.build(create_params)
    #byebug
   if project.save 
     render json: project
    end
  end

  def update 
    project = Project.find(params[:id])
    project.update(edit_params)
    #byebug
    if project.save
      render json: project
    end
  end

  private 

  def create_params
    params.require(:project).permit(:concept)
  end

  def edit_params
    params.require(:project).permit(:id, :concept, :title, :goals, :languages, :notepad, :completed)
  end
end
