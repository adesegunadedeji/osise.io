class EmployeereviewsController < ApplicationController
  before_action :set_employeereview, only: [:show, :update, :destroy]

  # GET /employeereviews
  def index
    @employeereviews = Employeereview.all

    render json: @employeereviews
  end

  # GET /employeereviews/1
  def show
    render json: @employeereview
  end

  # POST /employeereviews
  def create
    @employeereview = Employeereview.new(employeereview_params)

    if @employeereview.save
      render json: @employeereview, status: :created, location: @employeereview
    else
      render json: @employeereview.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /employeereviews/1
  def update
    if @employeereview.update(employeereview_params)
      render json: @employeereview
    else
      render json: @employeereview.errors, status: :unprocessable_entity
    end
  end

  # DELETE /employeereviews/1
  def destroy
    @employeereview.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employeereview
      @employeereview = Employeereview.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def employeereview_params
      params.require(:employeereview).permit(:name, :title, :team, :score, :feedback)
    end
end
