"""user email made index

Revision ID: 7d30ce7b582b
Revises: 2f738cbdac92
Create Date: 2018-10-16 20:01:09.622466

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7d30ce7b582b'
down_revision = '2f738cbdac92'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_user_email'), table_name='user')
    # ### end Alembic commands ###