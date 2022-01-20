import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  url?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Mascotas perdidas',
    children: [
      { name: 'Gatos', url: '/anuncios/mascotas-perdidas-gatos' },
      { name: 'Perros', url: '/anuncios/mascotas-perdidas-perros' },
      { name: 'Otros', url: '/anuncios/mascotas-perdidas-otros' },
    ]
  }, {
    name: 'Mascotas encontradas',
    children: [
      { name: 'Gatos', url: '/anuncios/mascotas-encontradas-gatos' },
      { name: 'Perros', url: '/anuncios/mascotas-encontradas-perros' },
      { name: 'Otros', url: '/anuncios/mascotas-encontradas-otros' },
    ]
  }, {
    name: 'Gestionar Publicación',
    url: '/anuncios/gestionar'
  },
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url: node.url ? node.url : ''
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
