require 'test_helper'

class EmployeereviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @employeereview = employeereviews(:one)
  end

  test "should get index" do
    get employeereviews_url, as: :json
    assert_response :success
  end

  test "should create employeereview" do
    assert_difference('Employeereview.count') do
      post employeereviews_url, params: { employeereview: { feedback: @employeereview.feedback, name: @employeereview.name, score: @employeereview.score, team: @employeereview.team, title: @employeereview.title } }, as: :json
    end

    assert_response 201
  end

  test "should show employeereview" do
    get employeereview_url(@employeereview), as: :json
    assert_response :success
  end

  test "should update employeereview" do
    patch employeereview_url(@employeereview), params: { employeereview: { feedback: @employeereview.feedback, name: @employeereview.name, score: @employeereview.score, team: @employeereview.team, title: @employeereview.title } }, as: :json
    assert_response 200
  end

  test "should destroy employeereview" do
    assert_difference('Employeereview.count', -1) do
      delete employeereview_url(@employeereview), as: :json
    end

    assert_response 204
  end
end
