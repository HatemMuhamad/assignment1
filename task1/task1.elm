module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


type alias Model =
    { baseUrl : String }


initialModel : Model
initialModel =
    { baseUrl = "https://localhost:3000/" }


type Msg
    = 
    BuildUrl

addThreeStrings x y z = x++y++z
buildUrl f x y = f x y "cars/"
update : Msg -> Model -> Model
update msg model =
    case msg of
        BuildUrl ->
            { model | baseUrl = model.baseUrl ++ buildUrl addThreeStrings "honda/" "civic/" }


view : Model -> Html Msg
view model =
    div []
        [button [ onClick BuildUrl ] [ text "build url" ]
        , div [] [ text <| model.baseUrl ]
        ]
        


main : Program () Model Msg
main =
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }
