class Api::HabitsController < ApplicationController
	before_action :set_habit, only: [:show, :update, :destroy]

	def index
		render json: Habit.all
	end

	def create
		habit = Habit.new(habit_params)
		if habit.save
			render json: habit
		else
			render json: { message: habit.errors }, status: 400
		end
	end

	def show
		render json: Habit.find_by(:id => params[:id])
	end

	def update
		if @habit.update(habit_params)
			render json: @habit
		else
			render json: { message: @habit.errors }, status: 400
		end
	end

	def destroy
		if @habit.destroy
			render status: 204
		else
			render json: { message: "Unable to remove this habit" }, status: 400
		end
	end

	private

	def set_habit
		@habit = Habit.find_by(:id => params[:id])
	end

	def habit_params
		params.require(:habit).permit(:name, :description, :streak)
	end

end