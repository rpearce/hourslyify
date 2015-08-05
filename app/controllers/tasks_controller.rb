class TasksController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        @tasks = Task.all
      end
    end
  end

  def create
    @task = Task.new(task_params)
    respond_to do |format|
      if @task.save
        format.json { render json: {}, status: 200 }
      else
        format.json { render json: @task.errors, status: 422 }
      end
    end
  end

  private

  def task_params
    params.require(:task).permit(:name, :current_rate, :start, :stop)
  end
end
