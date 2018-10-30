class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  # GET /events
  def index
    @events = Event.all 

    render json: @events, each_serializer: EventSerializer
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: @event 
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update 
    if @event.update!(event_params)
      # @event.cover.purge
      # @event.cover.attach(params[:cover])
     # name: params[:name], description: params[:description], cover: params[:cover], id: params[:id]
      render json: @event, each_serializer: EventSerializer 
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def event_params
      params.require(:event).permit(:name, :description, :cover)
      # {:event => params.fetch(:event, {}).permit(
      #   :name, :description, :cover
      # )}
    end
end