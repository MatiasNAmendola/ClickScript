/**
 * ClickScript - ClickScript is a visual programming language. This is a 
 * data flow programming language running entirely in a web browser.
 * Copyright (C) 2012 Lukas Naef
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * @author lnaef
 * 
 * CS.UTIL.CONTAINER - Represents a container with default functionality
 */
	dojo.provide("cs.util.Container");
	dojo.declare("cs.util.Container", null, {
		
		_container : null,
		
		constructor : function(){
			this._container = [];
		},
		
		/**
		 * Add item to the container. Dublicates are allowed.
		 * @param {G} a_item
		 */
		add : function(a_item){
			this._container.push(a_item);
		},
		
		/**
		 * True if a_item is in Container
		 * @param {G} a_item
		 */
		has : function(a_item){
			return this.indexOf(a_item) > -1;
		},
		
		/**
		 * Removes item from Container one times!
		 * @param {G} a_item
		 */
		remove : function(a_item){
			if (this.has(a_item)) {
				this._container.splice(this.indexOf(a_item),1);
				return true;
			} else {
				return false;
			}
		},
		
		/**
		 * Index of an Item in the Container. -1 if not in the Container
		 * @param {G} a_item
		 */
		indexOf : function(a_item){
			return dojo.indexOf(this._container,a_item);
		},
		
		/**
		 * Number of Elements in the container
		 */
		size : function(){
			return this._container.length;
		},
		
		/**
		 * Returns the item at position index
		 * @param {Integer} nbr
		 */
		get : function(a_index){
			if (this.size() > a_index){
				return this._container[a_index];
			} else {
				return null;
			}
		},
		
		/**
		 * Returns this.get(a_index)
		 * @param {Integer} a_index
		 */
		item: function(a_index){
			return this.get(a_index);
		},
		
		
		/**
		 * ForEach on the container. 
		 * example:
		 *	  var container = new cs.util.Container();
		 *    container.forEach(function(item,index,array){
		 *       array[index] = item + 1;
		 *    });
		 * You can set the this Object.
		 * 
		 * @param {Function} a_callback
		 * @param {Object} a_thisObject);}})
		 */
		forEach : function(a_callback, /*optional*/ a_thisObject){
			dojo.forEach(this._container,a_callback,a_thisObject);
		},
		
		copy : function(){
			var container = new cs.util.Container();
			this.forEach(function(item){
				container.add(dojo.clone(item));
			});
			return container ;
		},
		
		toString : function(){
			var out = "";
			this.forEach(function(item){
				out += item+", ";
			});
			return out.substring(0, out.length - 2);
		}
	
	});
		
