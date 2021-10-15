import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { RecipeInterface } from "../interfaces";
import { BASE_COLOR } from '../styles/colors';

const RecipePDF: React.FC<RecipeInterface> = ({
  name,
  source,
  type,
  ingredients,
  instructions,
  tags
}) => {
  return (
    <Document>
      <Page>
        <View>
          <Text style={{
              color: BASE_COLOR,
              fontSize: 30,
              textAlign: "center"
            }}
          >{name}</Text>
        </View>
        
        <View>
          <Text style={{textAlign: "center", fontWeight: "bold"}}>
            From {source}
          </Text>
        </View>
        
        <View>
          <Text style={{textAlign: "center"}}>{type}</Text>
        </View>
        
        <View style={{textAlign: "center", margin: 10}} >
          {ingredients.map((ing, index) => {
            return (
              <Text key={"ing-" + index}>{ing.amount} {ing.measurement ?? ''} {ing.name}</Text>
            )
          })}
        </View>
        
        <View>
          <Text style={{textAlign: "center", margin: 10}}>{instructions}</Text>
        </View>
        
        {tags?.map((tag, index) => {
          return (
            <Text key={"tag-" + index}>{tag}</Text>
          )
        })}
      </Page>
    </Document>
  )
}

export default RecipePDF