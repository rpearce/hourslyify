require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  def setup
    @task = tasks(:one)
  end

  def test_fixture_is_valid
    assert @task.valid?
  end

  def test_name_is_required
    @task.name = ''
    refute @task.valid?
    assert @task.errors.keys.include?(:name)
  end

  def test_current_rate_is_required
    @task.current_rate = nil
    refute @task.valid?
    assert @task.errors.keys.include?(:current_rate)
  end

  def test_current_rate_is_an_integer
    @task.current_rate = 'abc'
    refute @task.valid?
    assert @task.errors.keys.include?(:current_rate)
  end

  def test_current_rate_is_gte_0
    @task.current_rate = -1
    refute @task.valid?
    assert @task.errors.keys.include?(:current_rate)
  end
end
