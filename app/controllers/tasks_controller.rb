class TasksController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        @tasks = Task.order(id: :asc).all
      end
    end
  end

  def create
    @task = Task.new(task_params)
    respond_to do |format|
      if @task.save
        format.json { render json: {}, status: 201 }
      else
        format.json { render json: @task.errors, status: 422 }
      end
    end
  end

  def update
    @task = get_task
    respond_to do |format|
      if @task.update_attributes(task_params)
        format.json { render json: {}, status: 202 }
      else
        format.json { render json: @task.errors, status: 422 }
      end
    end
  end

  def destroy
    @task = get_task
    @task.destroy
    respond_to do |format|
      format.json { render json: {}, status: 200 }
    end
  end

  private

  def task_params
    params.require(:task).permit(:name, :current_rate, :start, :stop)
  end

  def get_task
    Task.find(params[:id])
  end
end
